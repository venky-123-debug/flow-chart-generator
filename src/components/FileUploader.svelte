<script>
  import { onMount } from 'svelte';
  import * as go from 'gojs';
  import * as YAML from 'js-yaml';
  import Papa from 'papaparse';
  import { parseString } from 'xml2js';

  let myDiagram;
  let inputFile;
  let textInput = '';

  const parseData = async (text, format) => {
    let data = { nodes: [], links: [] };

    try {
      if (format === 'json') {
        data = JSON.parse(text);
      } else if (format === 'yaml') {
        data = YAML.load(text);
      } else if (format === 'csv') {
        const parsed = Papa.parse(text, { header: true });
        data = {
          nodes: parsed.data.map(row => ({ key: row.Node, color: row.Color })),
          links: parsed.data.map(row => ({ from: row.Node, to: row.Target }))
        };
      } else if (format === 'xml') {
        const parsed = await new Promise((resolve, reject) => {
          parseString(text, (err, result) => (err ? reject(err) : resolve(result)));
        });
        data = {
          nodes: result.nodes.node.map(node => ({ key: node.$.key, color: node.$.color })),
          links: result.links.link.map(link => ({ from: link.$.from, to: link.$.to }))
        };
      }

      renderDiagram(data);
    } catch (error) {
      console.error('Error parsing data:', error);
    }
  };

  const renderDiagram = (data) => {
    if (!myDiagram) return;

    myDiagram.model = new go.GraphLinksModel(data.nodes, data.links);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => parseData(e.target.result, file.type.split('/')[1]);
      reader.readAsText(file);
    }
  };

  onMount(() => {
    myDiagram = go.GraphObject.make(go.Diagram, 'myDiagramDiv', {
      'undoManager.isEnabled': true,
      layout: new go.TreeLayout()
    });

    myDiagram.nodeTemplate =
      go.GraphObject.make(go.Node, 'Auto',
        go.GraphObject.make(go.Shape, 'Rectangle',
          { strokeWidth: 0 },
          new go.Binding('fill', 'color')),
        go.GraphObject.make(go.TextBlock,
          { margin: 8 },
          new go.Binding('text', 'key'))
      );

    myDiagram.linkTemplate =
      go.GraphObject.make(go.Link,
        { curve: go.Link.Bezier },
        go.GraphObject.make(go.Shape),
        go.GraphObject.make(go.Shape, { toArrow: 'standard' })
      );
  });
</script>

<input type="file" accept=".json,.csv,.xml,.yaml,.yml" on:change="{handleFileUpload}" />
<textarea bind:value="{textInput}" placeholder="Paste text here..." rows="10" cols="30"></textarea>
<button on:click={() => parseData(textInput, 'json')}>Parse JSON</button>
<button on:click={() => parseData(textInput, 'yaml')}>Parse YAML</button>
<button on:click={() => parseData(textInput, 'csv')}>Parse CSV</button>
<button on:click={() => parseData(textInput, 'xml')}>Parse XML</button>

<div id="myDiagramDiv" style="width: 100%; height: 600px;"></div>

<style>
  #myDiagramDiv {
    border: 1px solid #ddd;
  }
</style>

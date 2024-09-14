<script>
  import { onMount } from 'svelte';
  import * as go from 'gojs';

  let myDiagram;
  let textInput = '';
  let fileInput;

  // Function to parse data based on format
  const parseData = (text, format) => {
    let data = { nodes: [], links: [] };

    try {
      switch (format) {
        case 'json':
          data = JSON.parse(text);
          break;
        case 'yaml':
          data = parseYAML(text);
          break;
        case 'csv':
          data = parseCSV(text);
          break;
        case 'xml':
          data = parseXML(text);
          break;
        default:
          console.error('Unsupported format');
          return;
      }
      renderDiagram(data);
    } catch (error) {
      console.error('Error parsing data:', error);
    }
  };

  // Function to render diagram
  const renderDiagram = (data) => {
    if (!myDiagram) return;

    myDiagram.model = new go.GraphLinksModel(data.nodes, data.links);
  };

  // Function to handle file upload
  const handleFileUpload = (event) => {
    const input = event.target;
    const file = input.files ? input.files[0] : null;

    console
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const format = file.type.split('/')[1];
        parseData(e.target.result, format);
      };
      reader.readAsText(file);
    }
  };

  // Parse CSV data
  const parseCSV = (text) => {
    const lines = text.split('\n').map(line => line.trim()).filter(line => line);
    const nodes = [];
    const links = [];
    lines.forEach((line, index) => {
      if (index === 0) return; // Skip header line
      const [node, color, target] = line.split(',');
      if (node && color) {
        nodes.push({ key: node, color });
        if (target) {
          links.push({ from: node, to: target });
        }
      }
    });
    return { nodes, links };
  };

  // Parse XML data
  const parseXML = (text) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, 'application/xml');
    const nodes = Array.from(xmlDoc.getElementsByTagName('node')).map(node => ({
      key: node.getAttribute('key'),
      color: node.getAttribute('color')
    }));
    const links = Array.from(xmlDoc.getElementsByTagName('link')).map(link => ({
      from: link.getAttribute('from'),
      to: link.getAttribute('to')
    }));
    return { nodes, links };
  };

  // Parse YAML data (basic implementation)
  const parseYAML = (text) => {
    const lines = text.split('\n').map(line => line.trim()).filter(line => line);
    const nodes = [];
    const links = [];
    lines.forEach(line => {
      if (line.startsWith('node:')) {
        const [_, key, color] = line.split(' ');
        nodes.push({ key, color });
      } else if (line.startsWith('link:')) {
        const [_, from, to] = line.split(' ');
        links.push({ from, to });
      }
    });
    return { nodes, links };
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

  // Handle input text and file upload
  const handleInput = (format) => {
    parseData(textInput, format);
  };
</script>

<div class="p-4">
  <div class="mb-4">
    <input type="file" accept=".json,.csv,.xml,.yaml,.yml" on:change="{handleFileUpload}" class="p-2 border rounded" />
  </div>
  <div class="mb-4">
    <textarea bind:value="{textInput}" placeholder="Paste text here..." rows="10" cols="30" class="w-full p-2 border rounded"></textarea>
  </div>
  <div class="flex gap-2 mb-4">
    <button on:click={() => handleInput('json')} class="px-4 py-2 bg-blue-500 text-white rounded">Parse JSON</button>
    <button on:click={() => handleInput('yaml')} class="px-4 py-2 bg-green-500 text-white rounded">Parse YAML</button>
    <button on:click={() => handleInput('csv')} class="px-4 py-2 bg-yellow-500 text-white rounded">Parse CSV</button>
    <button on:click={() => handleInput('xml')} class="px-4 py-2 bg-red-500 text-white rounded">Parse XML</button>
  </div>
  <div id="myDiagramDiv" class="w-full h-[600px] border border-gray-300"></div>
</div>

<style>
  #myDiagramDiv {
    border: 1px solid #ddd;
  }
</style>

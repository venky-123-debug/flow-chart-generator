<script>
  import { onMount } from "svelte";
  import joint from "jointjs";

  export let data = {
    nodes: [],
    edges: [],
  };

  let container;

  onMount(() => {
    const graph = new joint.dia.Graph();

    // Initialize the diagram
    const paper = new joint.dia.Paper({
      el: container,
      model: graph,
      width: 600,
      height: 400,
      gridSize: 10,
    });

    // Add nodes to the graph
    data.nodes.forEach((node) => {
      const element = new joint.shapes.standard.Rectangle();
      element.position(node.x, node.y);
      element.resize(node.width, node.height);
      element.attr({
        body: {
          fill: node.color || "lightgray",
        },
        label: {
          text: node.label,
          fill: "black",
        },
      });
      element.addTo(graph);
    });

    // Add edges to the graph
    data.edges.forEach((edge) => {
      const link = new joint.shapes.standard.Link();
      link.source(edge.source);
      link.target(edge.target);
      link.addTo(graph);
    });
  });
</script>

<div bind:this={container} style="width: 100%; height: 600px;"></div>

<style>
  div {
    border: 1px solid #ddd;
  }
</style>

import React, { useRef, useState } from 'react';
import { GraphCanvas, useSelection } from 'reagraph';
import SubjectPopup from './SubjectPopup';

function Graph(props) {
  const graphRef = useRef(null);
  const { nodes, edges, visible } = props;
  console.log(visible)

  const {
    selections,
    actives,
    onNodeClick,
    onCanvasClick
  } = useSelection({
    ref: graphRef,
    nodes,
    edges,
    pathSelectionType: 'out'
  });

  return (
    <GraphCanvas
      selections={selections}
      actives={actives}
      onCanvasClick={onCanvasClick}
      onNodeClick={onNodeClick}
      ref={graphRef}
      labelType={visible ? 'all' : 'nodes'}
      nodes={nodes}
      edges={edges}
      theme={props.darkTheme}
      draggable
      edgeArrowPosition="none"
      contextMenu={({data, onClose}) => <SubjectPopup onClose={onClose} kod={data.id} nazwa={data.label}/>}
    />
  );
}

export default Graph;

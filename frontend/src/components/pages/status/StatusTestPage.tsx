import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { select } from 'd3';
import * as d3 from 'd3-geo';
import areaGu from '../../../data/test.json';

interface statusProps {}

const StatusTestPage = ({}: statusProps) => {
  const rn = React.useRef(null);
  const mapData = areaGu.features;

  React.useEffect(() => {
    renderMap();
  }, [mapData]);
  const renderMap = () => {
    const node = rn.current;
    // const width = node.width.animVal.value;
    // const height = node.height.animVal.value;
    const width = 1000;
    const height = 800;

    const projection = () => {
      return d3
        .geoMercator()
        .scale(150)
        .translate([width / 2, height / 2]);
    };
    select(node).append('g').classed('countries', true);
    const countries = select('g').selectAll('path').data(mapData);
    console.log(countries);

    countries
      .enter()
      .append('path')
      .classed('country', true)
      .attr('stroke', 'red')
      .attr('strokeWidth', 0.75)
      .each(function (d: any, i) {
        select(this).attr('d', d3.geoPath().projection(projection())(d));
      });
  };

  return (
    <Wrapper>
      <svg width={1000} height={500} ref={rn} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding-top: 100px;
`;

export default StatusTestPage;

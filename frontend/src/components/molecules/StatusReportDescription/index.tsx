import React from 'react';
import styled from 'styled-components';

interface StatusReportDescriptionProps {
  descriptionList: { title: string; content: string }[];
}

const StatusReportDescription = ({
  descriptionList,
}: StatusReportDescriptionProps) => {
  return (
    <Wrapper>
      {descriptionList.map((desc) => (
        <DescriptionItem>
          <div className="description-title">{desc.title}</div>
          <div className="description-content">{desc.content}</div>
        </DescriptionItem>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const DescriptionItem = styled.div`
  & .description-title {
  }
  & .description-content {
  }
`;

export default StatusReportDescription;

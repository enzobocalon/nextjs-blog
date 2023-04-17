import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;
  height: calc(100vh - 80px - 6rem - 50px - 30px);

  > h1 {
    margin-bottom: 1rem;
  }

  > div:first-of-type, .EasyMDEContainer, .CodeMirror.cm-s-easymde.CodeMirror-wrap, .CodeMirror-scroll {
    height: 100%;
    max-height: 600px;
  }

  .editor-toolbar {
    background-color: white;
  }
`;

export const EditorFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transform: translateY(100px);

  > button {
    max-width: 200px;
  }
`;

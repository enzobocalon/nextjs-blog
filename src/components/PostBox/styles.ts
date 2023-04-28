import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 1rem;
  height: calc(100vh - 80px - 1rem - 50px - 30px);

  :has(.CodeMirror-fullscreen) {
    > div:first-of-type, .EasyMDEContainer, .CodeMirror.cm-s-easymde.CodeMirror-wrap, .CodeMirror-scroll {
      max-height: none;
    }
  }

  > div:first-of-type, .EasyMDEContainer, .CodeMirror.cm-s-easymde.CodeMirror-wrap, .CodeMirror-scroll {
    height: 100%;
    max-height: 500px;
  }

  .CodeMirror-fullscreen {
    height: 100vh;
  }

  .editor-toolbar {
    background-color: white;
  }

  > input {
    width: 100%;
    margin-block: 1rem;
    padding: .5rem;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    outline: none;
  }
`;

export const EditorFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(100px);

  > button {
    max-width: 200px;
  }
`;

export const OptionsContainer = styled.div`
  flex: 1;
  strong {
    display: block;
    color: ${({theme}) => theme.lightGray};
    text-transform: uppercase;
    letter-spacing: .05em;
    margin-bottom: .5rem;
  }
`;

export const Options = styled.div`
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;

  label {
    letter-spacing: .02em;
  }
`;

import React, { useEffect } from 'react';
import E from 'wangeditor';

import styles from './index.less';

interface RichTextEditorProps {
  children?: React.ReactNode;
}

const InternalRichTextEditor: React.ForwardRefRenderFunction<
  unknown,
  RichTextEditorProps
> = (props) => {
  useEffect(() => {
    const editor = new E(`#${styles.richTextEditor}`);
    editor.create();
  }, []);
  return <div id={styles.richTextEditor} />;
};

const RichTextEditor = React.forwardRef<unknown, RichTextEditorProps>(
  InternalRichTextEditor,
);

RichTextEditor.displayName = 'RichTextEditor';

export default RichTextEditor;

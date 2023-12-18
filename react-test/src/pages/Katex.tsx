// @ts-ignore
import { BlockMath, InlineMath } from 'react-katex';

import 'katex/dist/katex.min.css';

export const Katex = () => {
  return (
    <div>
      <InlineMath>
        {'\\text{React-}\\KaTeX \\space \\text{usage examples}'}
      </InlineMath>

      <BlockMath math={'\\int_0^\\infty x^2 dx'} />

      <BlockMath>{`A =
        \\begin{pmatrix}
        1 & 0 & 0 \\\\
        0 & 1 & 0 \\\\
        0 & 0 & 1 \\\\
        \\end{pmatrix}`}</BlockMath>

      <BlockMath
        math={'\\int_0^\\infty x^2 dx \\inta'}
        errorColor={'#cc0000'}
      />
    </div>
  );
};

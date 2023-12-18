import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

export const ZoomPanel = () => {
  return (
    <div className="w-full h-full">
      <TransformWrapper
        initialScale={1}
        initialPositionX={200}
        initialPositionY={100}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <div className="w-full h-96">
              <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button>
              <button onClick={() => resetTransform()}>x</button>
            </div>
            <TransformComponent>
              <img
                src="https://api.dicebear.com/7.x/bottts/svg?seed=Zoey"
                alt="test"
              />
              <div>Example text</div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

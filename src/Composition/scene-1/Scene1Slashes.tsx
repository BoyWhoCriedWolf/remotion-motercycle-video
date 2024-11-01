import { FC } from 'react';
import Slash from '../../components/Slash';

const Scene1Slashes: FC<{ startFrame?: number }> = ({ startFrame = 0 }) => {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: -330, bottom: 'calc(100% - 450px)' }}>
        <Slash direction="TR" width={350} height={60} startFrame={startFrame + 10} distance={180} />
      </div>
      <div style={{ position: 'absolute', left: -350, bottom: '30%' }}>
        <Slash direction="TR" width={300} height={100} startFrame={startFrame + 0} distance={200} />
      </div>
      <div style={{ position: 'absolute', left: -450, bottom: -300 }}>
        <Slash
          direction="TR"
          width={600}
          height={150}
          fill={true}
          startFrame={startFrame + 15}
          distance={300}
        />
      </div>
      <div style={{ position: 'absolute', left: '45%', bottom: -200 }}>
        <Slash direction="TR" width={300} height={50} startFrame={startFrame + 30} />
      </div>

      <div style={{ position: 'absolute', right: 'calc(100% - 950px)', top: -300 }}>
        <Slash direction="BL" width={150} height={50} distance={400} startFrame={startFrame + 10} />
      </div>
      <div style={{ position: 'absolute', right: 0, top: -350 }}>
        <Slash
          direction="BL"
          width={400}
          height={80}
          fill={true}
          distance={300}
          startFrame={startFrame + 20}
        />
      </div>
      <div style={{ position: 'absolute', right: -200, top: -200 }}>
        <Slash direction="BL" width={150} height={50} distance={300} startFrame={startFrame + 25} />
      </div>
      <div style={{ position: 'absolute', right: -400, top: -100 }}>
        <Slash direction="BL" width={150} height={50} distance={300} startFrame={startFrame + 35} />
      </div>
      <div style={{ position: 'absolute', right: -400, top: 450 }}>
        <Slash direction="BL" width={600} height={150} distance={200} startFrame={startFrame + 0} />
      </div>
    </div>
  );
};

export default Scene1Slashes;

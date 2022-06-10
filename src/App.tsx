import { Suspense } from 'react';
import style from './App.module.scss';
import Card from './components/Card';
import Formulario from './components/Formulario';
import Calendario from './components/Calendario';
import ListaDeEventos from './components/ListaDeEventos';
import { RecoilRoot } from 'recoil';
import { DebugObserver } from './components/DebugObserver';

function App() {
  //Aqui é o componente principal onde tinha vários estados e funções que eram passadas adiante via props para os componentes, com o Recoil foi possível apagar tudo e deixar só o necessário.
  return (
    <RecoilRoot>
      <DebugObserver />
      <Suspense fallback="Loading..." >
        <div className={style.App}>
          <div className={style.Coluna}>
            <Card>
              <Formulario />
            </Card>
            <hr />
            <Card>
              <ListaDeEventos />
            </Card>
          </div>
          <div className={style.Coluna}>
            <Calendario />
          </div>
        </div>

      </Suspense>

    </RecoilRoot>
  );
}


export default App;

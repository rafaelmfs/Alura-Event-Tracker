import { useEffect } from "react";
import { useRecoilSnapshot } from "recoil";

//Compoente retirado da documentação do recoil, é utilizado para debug e vai mostrar no console as atualizações do estado.
export function DebugObserver(){
    const snapshot = useRecoilSnapshot();
    
    useEffect(() => {
      console.debug('The following atoms were modified:');
      for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {
        console.debug(node.key, snapshot.getLoadable(node));
      }
    }, [snapshot]);
  
    return null;
  }
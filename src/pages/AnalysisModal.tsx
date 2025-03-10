import { useEffect, useState } from "react";
import { Analysis } from "./Table";

interface AnalysisModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: string;
  onSubmit: (analysisData: Analysis) => void;
  selectedAnalysis?:any;
}

export default function AnalysisModal({ isOpen, onClose, mode, onSubmit, selectedAnalysis }: AnalysisModalProps) {
  const [analysisId, setAnalysisId] = useState<number | null>(null);
  const [name, setName] = useState("");

  useEffect(() => {
    if (selectedAnalysis) {
      setAnalysisId(selectedAnalysis.data.analysisId);
      setName(selectedAnalysis.data.name);
    } else {
      setAnalysisId(null);
      setName("");
    }
  }, [selectedAnalysis]);
  
  
  

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() === "") return;
    
    const analysisData: Analysis = {
      analysisId: analysisId ?? 0, 
      name, 
      auditCreateDate: "", 
      stateAnalysis: "ACTIVO"
    };

    onSubmit(analysisData);
  };

  return (
    <dialog id="my_modal_3" className="modal" open={isOpen}>
      <div className="modal-box">
        <h3 className="font-bold text-lg py-4">{mode === "update" ? "Actualizar Análisis" : "Registro de Análisis"}</h3>
        <form method="dialog" onSubmit={handleSubmit}>
          <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          <input 
            type="text" 
            className="input input-bordered w-full" 
            placeholder="Nombre del análisis" 
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
          <button type="submit" className="btn btn-success mt-4">
            {mode === "update" ? "Actualizar" : "Registrar"}
          </button>
        </form>
      </div>
    </dialog>
  );
}



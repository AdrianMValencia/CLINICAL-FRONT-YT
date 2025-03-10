import { FaTrash } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";

export interface Analysis {
  analysisId: number;
  name: string;
  auditCreateDate: string;
  stateAnalysis: string;
}

export interface BaseApiResponse<T> {
  isSuccess: boolean;
  data: T;
  message: string;
}

export default function Table({ handleOpen, analysis, handleDelete }: any) {
  const [tableData, setTableData] = useState<Analysis[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<BaseApiResponse<Analysis[]>>(
          "https://localhost:7067/api/Analysis/ListAnalysis"
        );
        if (response.data.isSuccess) {
          setTableData(response.data.data);
        }
      } catch (err: any) {}
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Análisis</th>
              <th>Fecha de creación</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item) => (
              <tr key={item.analysisId}>
                <td>{item.name}</td>
                <td>{item.auditCreateDate}</td>
                <td>
                  <div
                    className={`badge badge-soft text-sm ${
                      item.stateAnalysis == "ACTIVO"
                        ? `badge-accent`
                        : `badge-primary`
                    }`}
                  >
                    {item.stateAnalysis}
                  </div>
                </td>
                <td>
                  <button
                    onClick={() => handleOpen("update", item)}
                    className="btn btn-primary rounded-full text-sm mr-2"
                  >
                    <MdEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(item.analysisId)}
                    className="btn btn-error rounded-full text-sm"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import AdvancedService from '../services/AdvancedService';
import { CopyBlock, dracula } from "react-code-blocks";

const AdvancedSQL2Component = () => {

  const [results, setResults] = useState([])

  const getResult = () => {
    AdvancedService.getTexasTop().then((response) => {
        setResults(response.data)
        console.log(response.data);
    }).catch(error =>{
        console.log(error);
    })
  }

    useEffect(() => { 
        getResult();
    }, [])

  return (
    <div className = "container">
      <h2 className = "text-center"> Texas Top City </h2>
      <div className="demo">
        <CopyBlock
        language={'sql'}
        text={`SELECT A.city, count(1) as number
        FROM Orders O
                 left join Address A on O.address_id = A.id
                 left join Item I on O.item_id = I.id
        WHERE O.price > 288
          AND I.origin_price > 888
          AND A.state = 'Texas'
        GROUP BY A.city
        ORDER BY number desc
        LIMIT 15;`}
        showLineNumbers={10}
        theme={dracula}
        wrapLines={true}
        codeBlock
        />
    <br />
    </div>
        <table className="table table-bordered table-striped">
            <thead>
                <tr>
                <th> City </th>
                <th> Count</th>
                </tr>
            </thead>
            <tbody>
                    {
                        results.map(
                            result =>
                            <tr> 
                                <td> {result.city} </td>
                                <td> {result.cnt} </td>
                            </tr>
                        )
                    }
                </tbody>
        </table>
    </div>
  )
}

export default AdvancedSQL2Component
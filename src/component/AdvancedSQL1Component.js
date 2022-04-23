import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import AdvancedService from '../services/AdvancedService';
import { CopyBlock, dracula } from "react-code-blocks";

const AdvancedSQL1Component = () => {

  const [results, setResults] = useState([])

  const getResult = () => {
    AdvancedService.getUserLiked().then((response) => {
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
      <h2 className = "text-center"> User Liked </h2>
      <div className="demo">
        <CopyBlock
        language={'sql'}
        text={`SELECT u.username,
        COUNT(u.username) as cnt
        FROM User u
                left join Item i  on u.id = i.user_id
                left join Favorite f on i.user_id = f.user_id
        WHERE f.create_time >= "2021-12-01"
        and brands >= "B%"
        and current_price > 666
        GROUP BY u.username
        ORDER BY cnt desc
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
                <th> User Name </th>
                <th> Count</th>
                </tr>
            </thead>
            <tbody>
                    {
                        results.map(
                            result =>
                            <tr> 
                                <td> {result.username} </td>
                                <td> {result.count} </td>
                            </tr>
                        )
                    }
                </tbody>
        </table>
    </div>
  )
}

export default AdvancedSQL1Component
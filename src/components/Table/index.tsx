import { useEffect, useRef, useState } from 'react'
import { Form, useSubmit } from 'react-router-dom';
import { getUrlParam } from '../../misc/utils';

type Props<T, K extends keyof T> = {
    data: Array<T>;
    columns: { key: K; label: string; id: number }[];
};

const Table = <T, K extends keyof T>({
    columns,
    data
}: Props<T, K>) => {
    const submit = useSubmit();
    const formRef = useRef<HTMLFormElement>(null);
    const limitParam = parseInt(getUrlParam('_limit') || '10');
    const pageParam = parseInt(getUrlParam('_page') || '0');
    const [page, setPage] = useState(pageParam);
    const [limit, setLimit] = useState(limitParam);

    useEffect(() => {
      setLimit(limitParam);
      setPage(pageParam);
    }, [limitParam, pageParam])
    
    const submitForm = () => submit(formRef.current);

    return (
    <>
        <table>
            <thead>
                <tr>
                    {columns.map(column => <th key={column.id}>{column.label}</th>)}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                  <tr key={`row-${index}`}>
                      {columns.map((column, index2) => (
                              <td key={`column-${index2}`}>
                                {row[column.key] as string}
                              </td>
                          ))}
                  </tr>
                ))}
            </tbody>
        </table>
        <Form ref={formRef} id="table-form" state={{ hideSearch: true }}>
            Limit:
            <input name="_limit" id="_limit" placeholder="limit" value={limit} type="number" min={0} onChange={e => {
                setLimit(parseInt(e.target.value));
                submitForm();
            }} />
            Page: <input value={page} placeholder="page" name="_page" id="_page" type="number" min={0} onChange={e => {
                setPage(parseInt(e.target.value));
                submitForm();
            }} />
            <button onClick={e => {
                setPage(prev => prev - 1);
                submitForm();
            }} disabled={(page - 1) < 0}>Prev</button>
            <button onClick={e => {
                setPage(prev => prev + 1);
                submitForm();
            }}>Next</button>
        </Form>
    </>
  )
}

export default Table;

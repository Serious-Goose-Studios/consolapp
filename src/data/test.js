import React from 'react';
import Papa from 'papaparse';

const Test = () => {
  const [rows, setRows] = React.useState([]);  
  /*React.useEffect(() => {
    async function getData() {
      const response = await fetch('../data/clubs.csv');
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder('utf-8');
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      setRows(rows);
    }
    getData();
  }, []); // [] means just do this once, after initial render*/
  React.useEffect(() => {
    Papa.parse("../Assets/images/state_wise_data.csv", {
        download: true,
        complete: data => {
            setRows(data.data);
        }
    });
}, []);
  console.log(rows)
  return (
    <div className="test">
      <table dataSource={rows} />
    </div>
  )
}
export default Test;

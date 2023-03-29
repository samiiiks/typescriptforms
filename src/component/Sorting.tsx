import { useState, useMemo, FunctionComponent } from "react";
import moment from "moment";

type DataObject = {
  id: number;
  name: string;
  dateObject: {
    date: string;
  };
};

type AscDesc = {
  order: "asc" | "desc";
  key: string;
  isDate: boolean;
  isSortDate: boolean;
  isSortName: boolean;
  isSortId: boolean;
};

let arrayObject: DataObject [] = [
  {
    id: 1,
    name: "xyz",
    dateObject: {
      date: "12/02/2000 1:10 AM"
    }
  },
  {
    id: 2,
    name: "ayz",
    dateObject: {
      date: "12/02/2000 11:10 PM"
    }
  },
  {
    id: 3,
    name: "abc",
    dateObject: {
      date: "09/02/2000 11:10 PM"
    }
  }
];

const App: FunctionComponent = () => {
  const [ascDesc, setAscDesc] = useState<AscDesc>({
    order: "asc",
    key: "id",
    isDate: false,
    isSortDate: true,
    isSortName: true,
    isSortId: true,
  });
  const sorting = (datas: DataObject[], key: string, order: string, isDate: boolean) => {
    let data = [...datas];
    if (!!data && !!key && !!order) {
      if (isDate) {
        return data.sort((a, b) => {
          const aprev = moment(a.dateObject ['date'], "DD/MM/YYYY hh:mm A");
          const bnext = moment(b.dateObject['date'], "DD/MM/YYYY hh:mm A");
          if (order === "asc") {
            if (aprev > bnext) {
              return -1;
            }
            if (aprev < bnext) {
              return 1;
            }
            return 0;
          } else {
            if (aprev > bnext) {
              return 1;
            }
            if (aprev < bnext) {
              return -1;
            }
            return 0;
          }
        });
      } else {
        return data.sort((a, b) => {
          if (order === "desc") {
            if (a[key as keyof DataObject] > b[key as keyof DataObject]) {
              return -1;
            }
            if (a[key as keyof DataObject] < b[key as keyof DataObject]) {
              return 1;
            }
            return 0;
          } else {
            if (a[key as keyof DataObject] > b[key as keyof DataObject]) {
              return 1;
            }
            if (a[key as keyof DataObject] < b[key as keyof DataObject]) {
              return -1;
            }
            return 0;
          }
        });
      }
    }
    return[]
  };

  const dataSort = useMemo(() => {
    return sorting(arrayObject, ascDesc.key, ascDesc.order, ascDesc.isDate);
  }, [arrayObject, ascDesc]);

  return (
    <div className="App">
      <button onClick={() => setAscDesc({
        order: ascDesc.isSortId ? "asc" : "desc",
        key: "id",
        isDate: false,
        isSortId: !ascDesc.isSortId,
        isSortDate: true,
        isSortName: true
      })}>
        id {ascDesc.isSortId ? "asc" : "desc"}
      </button>
      <button onClick={() => setAscDesc({
        order: ascDesc.isSortName ? "asc" : "desc",
        key: "name",
        isDate: false,
        isSortId: true,
        isSortDate: true,
        isSortName: !ascDesc.isSortName
      })}>
        name {ascDesc.isSortName ? "asc" : "desc"}
      </button>
      <button onClick={() => setAscDesc({
        order: ascDesc.isSortDate ? "asc" : "desc",
        key: "date",
        isDate: true,
        isSortId: true,
        isSortDate: !ascDesc.isSortDate,
        isSortName: true
      })}>
        Date {ascDesc.isSortDate ? "asc" : "desc"}
      </button>
      <table>
        <thead>
          <th>ID</th>
          <th>Name</th>
          <th>Date</th>
        </thead>
        <tbody>
          {dataSort.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.dateObject.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
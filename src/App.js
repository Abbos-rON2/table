import { useState, useEffect } from "react";
import "./App.css";
import TableItem from "./components/TableItem";
function App() {
  const info = [
    {
      id: 1,
      date: "02.09.2021",
      name: "Trade Company",
      amount: 12486,
      distance: 536,
    },
    {
      id: 2,
      date: "03.09.2021",
      name: "Marketing Solutions",
      amount: 12351,
      distance: 2731,
    },
    {
      id: 3,
      date: "04.09.2021",
      name: "Consult Agency",
      amount: 61235,
      distance: 3451,
    },
    {
      id: 4,
      date: "05.09.2021",
      name: "Industry Company",
      amount: 4267,
      distance: 3266,
    },
    {
      id: 5,
      date: "05.09.2021",
      name: "Russia Devs",
      amount: 15245,
      distance: 1764,
    },
    {
      id: 6,
      date: "05.09.2021",
      name: "Company",
      amount: 3378,
      distance: 1657,
    },
  ];
  useEffect(() => setData(info), []);
  const [data, setData] = useState(null);
  const [filter, setFilter] = useState('name');
  const [operator, setOperator] = useState('more');

  const inputChange = (e) => {
    const input = e.target.value;
    if (filter && operator) {
      const res = info.filter((a) => {
        switch (operator) {
          case "more":
            if (a[filter] > +input) return true;
            else return false;
          case "less":
            if (a[filter] < +input) return true;
            else return false;
          case "equal":
            if (a[filter] === +input) return true;
            else return false;
          case "exist":
            if (a[filter].toLowerCase().indexOf(input.toLowerCase()) !== -1)
              return true;
            else return false;
          default:
            break;
        }
      });
      setData(res);
    }
  };
  return (
    <div className="App">
      <div className="settings">
        Фильтрировать по
        <select
          name="filter"
          id="filter"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="name">Название</option>
          <option value="amount">Кол-во</option>
          <option value="distance">Расстояние</option>
        </select>
        <br />
        Условие
        <select
          name="operator"
          id="operator"
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="more">Больше</option>
          <option value="less">Меньше</option>
          <option value="equal">Равно</option>
          <option value="exist">Содержит</option>
        </select>
        <br />
        Значение
        <input type="input" onChange={inputChange} />
      </div>
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <TableItem key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

import { useEffect } from "react";
import { Container } from "./style";

export function TransactionTable() {
  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Value</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Website development</td>
            <td className="deposit">$1200.00</td>
            <td>Development</td>
            <td>07/16/2020</td>
          </tr>

          <tr>
            <td>Rent</td>
            <td className="withdraw">- $1000.00</td>
            <td>Housing</td>
            <td>07/18/2020</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
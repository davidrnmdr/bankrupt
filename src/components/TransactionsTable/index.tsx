import { useEffect } from "react";
import { Container } from "./style";
import { api } from "../../services/api";

export function TransactionTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
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

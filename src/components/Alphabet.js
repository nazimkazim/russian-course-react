import React from "react";

export default function Alphabet() {
 

  return (
    <div className="table-container">
      <table className="table is-hoverable is-striped is-bordered">
        <thead>
          <tr>
            <th>
              <abbr title="Номер позиции">Индекс</abbr>
            </th>
            <th>
              <abbr>Русская буква</abbr>
            </th>
            <th>
              <abbr title="Won">Слово на английском</abbr>
            </th>
            <th>
              <abbr title="Drawn">Слово на русском</abbr>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>А а</td>
            <td>
              B<span className="has-text-success">a</span>r
            </td>
            <td>
              Б<span className="has-text-success">a</span>р
            </td>
          </tr>
          <tr>
            <th>2</th>
            <td>Б б</td>
            <td>
              <span className="has-text-success">B</span>ar
            </td>
            <td>
              <span className="has-text-success">Б</span>aр
            </td>
          </tr>
          <tr>
            <th>3</th>
            <td>В в</td>
            <td>
              <span className="has-text-success">V</span>ector
            </td>
            <td>
              <span className="has-text-success">B</span>ектор
            </td>
          </tr>
          <tr>
            <th>4</th>
            <td>Г г</td>
            <td>
              <span className="has-text-success">G</span>arage
            </td>
            <td>
              <span className="has-text-success">Г</span>араж
            </td>
          </tr>
          <tr>
            <th>5</th>
            <td>Д д</td>
            <td>
              <span className="has-text-success">D</span>ocker
            </td>
            <td>
              <span className="has-text-success">Д</span>окер
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

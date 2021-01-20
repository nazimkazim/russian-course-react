import React from 'react';
import styled from 'styled-components';


const Image = styled.img`
  width:30px;
  height:30px;
`

function PossessivePronounsChart() {
  return (
    <table className="table is-bordered is-striped is-narrow is-hoverable">
      <thead>
        <tr>
          <th>
            <Image src="https://res.cloudinary.com/nzmai/image/upload/v1610786476/russian%20course/general/male-user.png" />
          </th>
          <th>
            <Image src="https://res.cloudinary.com/nzmai/image/upload/v1610786479/russian%20course/general/female-worker.png" />
          </th>
          <th>Eng</th>
          <th>Examples</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Мой</th>
          <td>Моя</td>
          <td>My</td>
          <td>
            <ul>
              <li>Мой папа</li>
              <li>Моя мама</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>Твой</th>
          <td>Твоя</td>
          <td>Your</td>
          <td>
            <ul>
              <li>Твой брат</li>
              <li>Твоя сестра</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>Наш</th>
          <td>Наша</td>
          <td>Our</td>
          <td>
            <ul>
              <li>Наш внук</li>
              <li>наша внучка</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>Ваш</th>
          <td>Ваша</td>
          <td><abbr title="When addressing senior or unfamiliar people or when you should show respect">Your</abbr></td>
          <td>
            <ul>
              <li>Ваш дедушка</li>
              <li>Ваша бабушка</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>Его</th>
          <td>Её</td>
          <td>His/Her</td>
          <td>
            <ul>
              <li>Его друг</li>
              <li>Её подруга</li>
            </ul>
          </td>
        </tr>
        <tr>
          <th>Их</th>
          <td>Их</td>
          <td>Their</td>
          <td>
            <ul>
              <li>Их брат</li>
              <li>Их сестра</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default PossessivePronounsChart;

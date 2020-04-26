import React from 'react';

function PersonalPronounsChart() {
    return (
        <table class="table is-bordered is-striped is-narrow is-hoverable">
            <thead>
                <tr>
                    <th>Eng</th>
                    <th>Rus</th>
                    <th>Notes</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>I</th>
                    <td>Я</td>
                    <td>-</td>
                </tr>
                <tr>
                    <th>You</th>
                    <td>Ты</td>
                    <td>Informal, singular</td>
                </tr>
                <tr>
                    <th>He</th>
                    <td>Он</td>
                    <td>Masculine</td>
                </tr>
                <tr>
                    <th>She</th>
                    <td>Она</td>
                    <td>Feminine</td>
                </tr>
                <tr>
                    <th>It</th>
                    <td>Это</td>
                    <td>Inanimate noun</td>
                </tr>
                <tr>
                    <th>You</th>
                    <td>Вы</td>
                    <td><abbr title="When addressing senior or unfamiliar people or when you should show respect">Formal, plural</abbr></td>
                </tr>
                <tr>
                    <th>We</th>
                    <td>Мы</td>
                    <td>-</td>
                </tr>
                <tr>
                    <th>They</th>
                    <td>Они</td>
                    <td>-</td>
                </tr>
            </tbody>

        </table>
    );
}

export default PersonalPronounsChart;

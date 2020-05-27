import React from 'react';

function PersonalPronounsChart() {
    return (
        <table className="table is-bordered is-striped is-narrow is-hoverable">
            <thead>
                <tr>
                    <th>Subject Pronouns</th>
                    <th><abbr title="Object pronoun genitive case">Object Pronouns</abbr></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>Я</th>
                    <td>Меня</td>
                </tr>
                <tr>
                    <th>Ты</th>
                    <td>Тебя</td>
                </tr>
                <tr>
                    <th>Он</th>
                    <td>Его</td>
                </tr>
                <tr>
                    <th>Она</th>
                    <td>Её</td>
                </tr>
                <tr>
                    <th>Оно</th>
                    <td>Его</td>
                </tr>
                <tr>
                    <th>Вы</th>
                    <td>Вас</td>
                </tr>
                <tr>
                    <th>Мы</th>
                    <td>Нас</td>
                </tr>
                <tr>
                    <th>Они</th>
                    <td>Их</td>
                </tr>
            </tbody>

        </table>
    );
}

export default PersonalPronounsChart;

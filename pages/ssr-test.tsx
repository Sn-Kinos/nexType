import React from 'react';
import axios from 'axios';
import Layout from '../components/Layout';

const summaryStyle = {
    cursor: 'pointer',
};

interface Kodex {
    0: string,
    1: {
        dialog: string,
    },
}

const SSRTest = (props: { kodex: Kodex }) => {
    const {kodex} = props;

    const closer = function (event) {
        if (!event.currentTarget.parentNode.open) {
            const kodex = document.querySelectorAll('details');
            for (let i = 0; i < kodex.length; ++i) {
                kodex[i].open = false;
            }
        }
    };

    const kodexList = Object.entries(kodex).map((kodex) => {
        return (
            <li key={kodex[0]}>
                <details>
                    <summary style={summaryStyle} onClick={closer}>{kodex[0]}</summary>
                    <p>{kodex[1].dialog}</p>
                </details>
            </li>
        );
    });

    return (
        <Layout title={'SSR TEST'}>
            <ul>
                {kodexList}
            </ul>
        </Layout>
    );
};

SSRTest.getInitialProps = async () => {
    const response = await axios.get(`https://raw.githubusercontent.com/Sn-Kinos/Qutabase/master/qurare.json`);
    return {
        kodex: response.data,
    };
};

export default SSRTest;

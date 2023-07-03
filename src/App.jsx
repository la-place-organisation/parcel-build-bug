import Logo from 'jsx:./logo.svg';

import imgMaxime from './maxime.jpg';

const App = () => {
    return (<>
        <Logo />
        <img src={imgMaxime} />
    </>);
}

export default App;

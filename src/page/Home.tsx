import style from './Home.module.css'
import Layout from "../components/Layout/Layout.tsx";

const Home = () => {
    return (
        <Layout>
            <main className={style['main']} />
        </Layout>
    );
};

export default Home;
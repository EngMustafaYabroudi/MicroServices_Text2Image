import Login from "@/components/Auth/login";
import Header from "@/components/Header";
import Head from 'next/head';

const Index = () => {
    return (
        <>
        <div className="Login">
            <Head>
                <title>Tavlorify Store - Login</title>
            </Head>
        </div>
        <div>
            <Login />
        </div>
     </>
    );
};

export default Index;
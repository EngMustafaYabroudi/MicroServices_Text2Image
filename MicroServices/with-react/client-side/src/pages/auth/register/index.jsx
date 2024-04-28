import Register from "@/components/Auth/register";
import Header from "@/components/Header";
import Head from 'next/head';

const Index = () => {
    return (
        <>
        <div className="Login">
            <Head>
                <title>Tavlorify Store - Register</title>
            </Head>
          <Header/>
        </div>
        <div>
            <Register />
        </div>
     </>
    );
};

export default Index;
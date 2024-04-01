import {Btn} from '../components/Btn'

export const Home = () => {

    return(
    <section className="flex flex-col w-auto h-128 justify-center items-center gap-8">
        <h1 className="text-3xl font-bold underline">
            Hello world!
        </h1>
        <h2 className="text-lg text-gray">
            Test H2
        </h2>
        <Btn/>
    </section>
    )
}
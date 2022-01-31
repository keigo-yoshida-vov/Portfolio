import GraphsPage from '../../pages/libraries/graphs';
import scss from './homeTemplate.module.scss';
import Link from 'next/link'

export const HomeTemplate = () => {
    return (
        <>
            <div>libralys</div>
            <Link href="/libraries/graphs">
                <a>Graphs</a>
            </Link>
        </>
    );
};

import scss from './topTemplate.module.scss';
import Link from 'next/link'

export const TopTemplate = () => {
    return (
        <>
            <div>libralys</div>
            <Link href="/libraries/graphs">
                <a>Graphs</a>
            </Link>
        </>
    );
};

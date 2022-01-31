import scss from './libraries.module.scss';
import Link from 'next/link'

export const LibrariesTemplate = () => {
    return (
        <>
            <div className={scss.flexBox}>
                <div>
                    <Link href="/"><a>Home</a></Link>
                </div>
                <span className={scss.sideMargin5}>{`>`}</span>
                <div>
                    <p>libraries</p>
                </div>
            </div>
            <Link href="/libraries/graphs">
                <a>Graphs</a>
            </Link>
        </>
    );
};

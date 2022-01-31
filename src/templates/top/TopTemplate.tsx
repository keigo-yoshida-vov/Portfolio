import scss from './top.module.scss';
import Link from 'next/link'

export const TopTemplate = () => {
    return (
        <>
            <div className={`${scss.flexBox} ${scss.marginTop10}`}>
                <Link href="/libraries">
                    <a>libraries</a>
                </Link>
            </div>
        </>
    );
};

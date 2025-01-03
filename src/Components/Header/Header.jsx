import profile from '../../../knowledge-cafe/images/profile.png'

const Header = () => {
    return (
        <header className="flex justify-between items-center border-b-2 py-12">
            <h1 className='text-[40px] font-bold'>Knoledge Cafe</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;
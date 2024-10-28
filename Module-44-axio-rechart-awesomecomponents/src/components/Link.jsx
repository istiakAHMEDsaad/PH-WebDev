import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {path, name} = route;
    return (
        <div className=''>
            
          <li  className="text-base font-semibold hover:text-rose-500 transition-all duration-150 md:border md:px-6 md:py-2 rounded-md md:hover:bg-gray-100 cursor-pointer">
            <a href={path}>{name}</a>
          </li>
        
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired,
}

export default Link;
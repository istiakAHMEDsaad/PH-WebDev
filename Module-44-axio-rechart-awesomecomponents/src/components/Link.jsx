import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {path, name} = route;
    return (
        <div>
            
          <li  className="text-base font-semibold hover:text-rose-500 transition-all duration-150">
            <a href={path}>{name}</a>
          </li>
        
        </div>
    );
};

Link.propTypes = {
    route: PropTypes.object.isRequired,
}

export default Link;
import {
	StyledInputSearch,
	StyledTitle,
	StyledTitleMode,
	StyledWrapper
} from './styles';

const Header = () => {
	return (
		<>
			<StyledWrapper>
				<StyledTitle>Where in the world?</StyledTitle>
				<StyledTitleMode>🌙 Dark Mode</StyledTitleMode>
			</StyledWrapper>

			<StyledInputSearch type='text' name='nameCountry' placeholder='🔍 Search de country...' />

            
		</>
	);
};
export default Header;

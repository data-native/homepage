import styled from 'styled-components';

const StyledWrapper = styled.div`
  display: grid;
  border: 1px dashed grey;
`;

export function SearchBar({
  handleChange
}){
  return (
    <StyledWrapper>
      <div class="input">
        <input 
            type="text" 
            placeholder="Search"
            onChange={(e) => handleChange(e)}
        />
      </div>
    </StyledWrapper>
  )
}

import styled from 'styled-components';

const StyledWrapper = styled.div``;


export function ArticleCard({article}) {
    return (
        <StyledWrapper>
            <div className="header">
                {article.Title}
            </div>
            <div className="content">
                {article.Subtitle}
            </div>
            <div className="footer">
                Footer content
            </div>
        </StyledWrapper>
    )
}
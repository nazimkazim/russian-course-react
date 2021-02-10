import styled from 'styled-components';

export const Root = styled.div`
  display:flex;
  justify-content:space-between;
  margin:0 auto;
  padding:6px;
  max-width:800px;
  min-height:300px;
  background-color:#FE5722;
  border-radius:6px;
`;

export const Side = styled.div`
  position:relative;
  display:flex;
  flex-direction:column;
  min-height:100%;
  justify-content:${props => props ? props.verticalAlignment : 'center'};
  align-items:center;
  flex:0.49;
  background-color:#FE440B;
  border-radius:6px;
  border-top:3px solid #FFE7DF;
  -webkit-box-shadow: -13px 14px 10px -12px rgba(223,53,1,1);
  -moz-box-shadow: -13px 14px 10px -12px rgba(223,53,1,1);
  box-shadow: -13px 14px 10px -12px rgba(223,53,1,1);
`;

export const Avatar = styled.div`
  width:200px;
  height:200px;
  border-radius:50%;
  border:1px solid #FFE7DF;
  background-image:${props => `url(${props.avatar})`};
  background-repeat: no-repeat;
  background-size:cover;
  background-position: center;
  margin-top:20px;
  -webkit-box-shadow: -13px 14px 10px -12px rgba(223,53,1,1);
  -moz-box-shadow: -13px 14px 10px -12px rgba(223,53,1,1);
  box-shadow: -13px 14px 10px -12px rgba(223,53,1,1);
  cursor:pointer;
`;

export const Header = styled.h3`
  color:white;
  font-size: ${props => props.fontSize};
  text-transform:${props => props.stringCase};
  font-weight:bold;
  margin-top:${props => props.marginTop};
  cursor:pointer;
  margin-bottom:${props => props.marginBottom};
`;

export const Emoji = styled.span`
  font-size:20px;
`;

export const SideHeader = styled.div`
  position:absolute;
  left:0;
  top:0;
  width:100%;
  min-height:10px;
  /* background-color:blue; */
  padding-left:10px;
  padding-top:10px;
  display:flex;
  align-items:center;
  color:white;
  font-weight:bold;
`;

export const Info = styled.div`
  width:100%;
  margin-top:50px;
  min-height:100px;
  /* background-color:blue; */
`;

export const ListItem = styled.div`
  display:flex;
  width:100%;
  min-height:${props => props.forList ? '50px' : '24px'} !important;
  /* background-color:yellow; */
  margin-top:10px;
  cursor:pointer;
`;

export const ListItemHalf = styled.div`  
  display:flex;
  flex-direction:${props => props.forList ? 'column' : 'row'};
  align-items:${props => props.forList ? 'start' : 'center'};
  flex:0.5;
  height:100%;
  font-weight:${props => props.fontWeight};
  padding-left:${props => props.paddingLeft};
  color:white;
  /* background-color:red; */
  padding-right:2px;
`;

export const Icon = styled.div`
  cursor:pointer;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:14px;
  width:15px;
  height:15px;
  background-color:white;
  border-radius:50%;
  color:#FE5722;
  margin-right:10px;
  margin-left:5px;
`;

export const Button = styled.button`
  width:40px;
  height:40px;
  border-radius:50%;
  cursor:pointer;
  border:none;
  background-image:url('https://res.cloudinary.com/nzmai/image/upload/v1595334222/icons/restart.png');
  background-repeat: no-repeat;
  background-size: 25px;
  background-color:white;
  background-position: center;

  &:focus {
    outline:none;
}
`
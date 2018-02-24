import wepy from 'wepy';
import util from './util';
import tip from './tip'

const wxRequest = async({ url,method='GET',data={}}) => {
    tip.loading();
    let res = await wepy.request({
        url: url,
        method: method,
        data: data,
        header: { 'Content-Type': 'application/json' },
    });
    tip.loaded();
    return res;
};


export default wxRequest;
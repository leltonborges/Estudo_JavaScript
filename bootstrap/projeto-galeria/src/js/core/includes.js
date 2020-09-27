import $, { Callbacks } from 'jquery';

const loadHTMLSuccessCallbacks = []

export function onLoadHTMLSuccess(cb){
    if(!loadHTMLSuccessCallbacks.includes(cb)){
        loadHTMLSuccessCallbacks.push(cb)
    }
}

function loadIncludes(parent){
    if(!parent) parent = 'body';
    $(parent).find('[wm-include]').each(function(index, element){
        const url = $(element).attr('wm-include');
        $.ajax({
            url, 
            success(data){
                $(element).html(data)
                $(element).removeAttr('wm-include')

                loadHTMLSuccessCallbacks.forEach(callback => {
                    callback(data)
                })
                loadIncludes(element);
            }
        })
    })
}

loadIncludes()
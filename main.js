$('.form-item').on('click', '.btn-close', function () {
    $(this).closest('.container').remove();
});

$('.control').on('click', '.btn-add-input', function() {
    $('.form-item').append(`
        <div class="container border border-dark rounded mb-4">
            <div class="row mb-4">
                <div class="col-11">
                    <h4 class="form-title mb-0 mt-1">Input</h4>
                </div>
                <div class="col-1 px-0"><button class="btn btn-close">&#10005;</button></div>
            </div>
            <div class="row">
                <div class="col-2"><label for="">Type</label></div>
                <div class="col-10">
                    <select class="form-control" id="exampleFormControlSelect1">
                        <option>text</option>
                        <option>button</option>
                        <option>email</option>
                        <option>number</option>
                        <option>password</option>
                    </select>
                </div>

                <div class="col-2"><label for="">Label</label></div>
                <div class="col-10"><input class="form-control" type="text"></div>

                <div class="col-2"><label for="">Name</label></div>
                <div class="col-10"><input class="form-control" type="text"></div>

                <div class="col-2"><label for="">Id</label></div>
                <div class="col-10"><input class="form-control" type="text"></div>

                <div class="col-2"><label for="">Placeholder</label></div>
                <div class="col-10"><input class="form-control" type="text"></div>

                <div class="col-2"><label for="">Require</label></div>
                <div class="col-10">
                    <input class="form-check-input" type="checkbox" id="gridCheck1">
                </div>
            </div>
        </div>
    `);
});

$('.control').on('click', '.btn-add-textarea', function () {
    $('.form-item').append(
        `<div class="container border border-dark rounded mb-4">
            <div class="row mb-4">
                <div class="col-11">
                    <h4 class="form-title mb-0 mt-1">Textarea</h4>
                </div>
                <div class="col-1 px-0"><button class="btn btn-close">&#10005;</button></div>
            </div>
            <div class="row">
                <div class="col-2"><label for="" class="my-0">Label</label></div>
                <div class="col-10"><input class="form-control" type="text"></div>

                <div class="col-2"><label for="">Name</label></div>
                <div class="col-10"><input class="form-control" type="text"></div>

                <div class="col-2"><label for="">Id</label></div>
                <div class="col-10"><input class="form-control" type="text"></div>

                <div class="col-2"><label for="">Placeholder</label></div>
                <div class="col-10"><input class="form-control" type="text"></div>

                <div class="col-2"><label for="">Require</label></div>
                <div class="col-10">
                    <input class="form-check-input" type="checkbox" id="gridCheck1">
                </div>

                <div class="col-2"><label for="">Row</label></div>
                <div class="col-10"><input class="form-control" type="number" value="10" min="1"></div>

                <div class="col-2"><label for="">Column</label></div>
                <div class="col-10"><input class="form-control" type="number" value="30" min="1"></div>
            </div>
        </div>
    `);
});

$('.control').on('click', '.btn-add-button', function () {
    $('.form-item').append(
        `<div class="container border border-dark rounded mb-4">
            <div class="row mb-4">
                <div class="col-11">
                    <h4 class="form-title mb-0 mt-1">Button</h4>
                </div>
                <div class="col-1 px-0"><button class="btn btn-close">&#10005;</button></div>
            </div>
            <div class="row">
                <div class="col-2"><label for="" class="my-0">Label</label></div>
                <div class="col-10"><input class="form-control" type="text"></div>

                <div class="col-2"><label for="">Name</label></div>
                <div class="col-10"><input class="form-control" type="text"></div>

                <div class="col-2"><label for="">Id</label></div>
                <div class="col-10"><input class="form-control" type="text"></div>
            </div>
        </div>
    `);
});

$('.control').on('click', '.btn-refresh', function () {
    $('.form-item .container').remove();
});

$('.control').on('click', '.btn-button-save', function () {
    saveForm();
});

function saveForm() {
    const configs = [];
    let numOfInput = $('.form-item .container');
    for (let index = 0; index < numOfInput.length; index++) {
        const element = numOfInput[index];
        let config = saveConfig(element);
        configs.push(config);
    }
    localStorage.setItem('formConfigs', JSON.stringify(configs));
    console.log(configs);
}

function saveConfig(element) {
    const obj = {};
    obj.type = $(element).find('.form-title').text().toLowerCase() == "input" ? 
                $(element).find('select').val() : $(element).find('.form-title').text().toLowerCase();
    obj.label = $(element).find('input[type=text]').eq(0).val();
    obj.name = $(element).find('input[type="text"]').eq(1).val();  
    obj.id = $(element).find('input[type="text"]').eq(2).val();
    obj.placeholder = $(element).find('input[type="text"]').eq(3).val();
    obj.require = $(element).find('input[type="checkbox"]').is(':checked');
    obj.row =  $(element).find('input[type="number"]').eq(0).val();
    obj.col =  $(element).find('input[type="number"]').eq(1).val();
    return obj;
}

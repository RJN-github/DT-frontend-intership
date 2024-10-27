async function main() {
    let data = await fetch('../data/data.json')
    let response = await data.json()
    console.log(response);

    const journeyboardarrow = document.querySelector('.journeyboardarrow');
    journeyboardarrow.addEventListener('click', (e) => {
        e.target.classList.toggle('expanded');
        const Expanded = e.target.classList.contains('expanded');
        if (Expanded) {
            document.querySelector('.journeyboardnav').style.width = "392px";
            document.querySelector('.journeyboardcont').style.width = "392px";
            e.target.style.left = "352px";
            e.target.style.transform = "rotate(-180deg)";
            document.querySelector('.journeyboardcontent').style.display = "none";
            document.querySelector('.journeyboardcontenttext').style.display = "none";
            document.querySelector('.journeyboardexpandedcontenttextcont').style.display = "block";
            document.querySelector('.journeyboardexpandedcontent').style.display = "block";
            document.querySelector('.journeyboardexpandednavtitle').style.display = "block";
        } else {
            document.querySelector('.journeyboardnav').style.width = "132px";
            document.querySelector('.journeyboardcont').style.width = "132px";
            e.target.style.left = "81px";
            e.target.style.transform = "rotate(0deg)";
            document.querySelector('.journeyboardcontent').style.display = "block";
            document.querySelector('.journeyboardcontenttext').style.display = "block";
            document.querySelector('.journeyboardexpandedcontenttextcont').style.display = "none";
            document.querySelector('.journeyboardexpandedcontent').style.display = "none";
            document.querySelector('.journeyboardexpandednavtitle').style.display = "none";
        }
    });

    const asset3threadarrow = document.querySelector('.threadtitleimg')
    asset3threadarrow.addEventListener('click', (e) => {
        e.target.classList.toggle('threadexpand')
        console.log('clicked');

        const threadexpand = e.target.classList.contains('threadexpand')

        if (threadexpand) {
            e.target.style.transform = "rotate(180deg)"


            document.querySelector('.thread1').classList.add('expand')
            document.querySelector('.threadtitle1').classList.add('expand')
            document.querySelector('.threadtitletext1').classList.add('expand')
            document.querySelector('.threadinput1').classList.add('expand')
            document.querySelector('.threadinputtext1').classList.add('expand')
            document.querySelector('.thread2').classList.add('expand')
            document.querySelector('.threadtitle2').classList.add('expand')
            document.querySelector('.threadtitletext2').classList.add('expand')
            document.querySelector('.threadinput2').classList.add('expand')
            document.querySelector('.threadinputtext2').classList.add('expand')
            document.querySelector('.icon1').classList.add('expand')
            document.querySelector('.icon2').classList.add('expand')
            document.querySelector('.icon3').classList.add('expand')
            document.querySelector('.icon4').classList.add('expand')
            document.querySelector('.categories').classList.add('expand')
            document.querySelector('.process').classList.add('expand')
            document.querySelector('.threadsubmitbtn').classList.add('expand')
            document.querySelector('.summarytitle').classList.add('expand')
            document.querySelector('.summarytitletext').classList.add('expand')
            document.querySelector('.summaryinput').classList.add('expand')
            document.querySelector('.summaryinputtext').classList.add('expand')

            document.querySelector('.thread1').classList.remove('collapse')
            document.querySelector('.threadtitle1').classList.remove('collapse')
            document.querySelector('.threadtitletext1').classList.remove('collapse')
            document.querySelector('.threadinput1').classList.remove('collapse')
            document.querySelector('.threadinputtext1').classList.remove('collapse')
            document.querySelector('.thread2').classList.remove('collapse')
            document.querySelector('.threadtitle2').classList.remove('collapse')
            document.querySelector('.threadtitletext2').classList.remove('collapse')
            document.querySelector('.threadinput2').classList.remove('collapse')
            document.querySelector('.threadinputtext2').classList.remove('collapse')
            document.querySelector('.icon1').classList.remove('collapse')
            document.querySelector('.icon2').classList.remove('collapse')
            document.querySelector('.icon3').classList.remove('collapse')
            document.querySelector('.icon4').classList.remove('collapse')
            document.querySelector('.categories').classList.remove('collapse')
            document.querySelector('.process').classList.remove('collapse')
            document.querySelector('.threadsubmitbtn').classList.remove('collapse')
            document.querySelector('.summarytitle').classList.remove('collapse')
            document.querySelector('.summarytitletext').classList.remove('collapse')
            document.querySelector('.summaryinput').classList.remove('collapse')
            document.querySelector('.summaryinputtext').classList.remove('collapse')

            setTimeout(() => {
                document.querySelector('.thread1').classList.remove('block')
                document.querySelector('.threadtitle1').classList.remove('block')
                document.querySelector('.threadtitletext1').classList.remove('block')
                document.querySelector('.threadinput1').classList.remove('block')
                document.querySelector('.threadinputtext1').classList.remove('block')
                document.querySelector('.thread2').classList.remove('block')
                document.querySelector('.threadtitle2').classList.remove('block')
                document.querySelector('.threadtitletext2').classList.remove('block')
                document.querySelector('.threadinput2').classList.remove('block')
                document.querySelector('.threadinputtext2').classList.remove('block')
                document.querySelector('.icon1').classList.remove('block')
                document.querySelector('.icon2').classList.remove('block')
                document.querySelector('.icon3').classList.remove('block')
                document.querySelector('.icon4').classList.remove('block')
                document.querySelector('.categories').classList.remove('block')
                document.querySelector('.process').classList.remove('block')
                document.querySelector('.threadsubmitbtn').classList.remove('block')
                document.querySelector('.summarytitle').classList.remove('block')
                document.querySelector('.summarytitletext').classList.remove('block')
                document.querySelector('.summaryinput').classList.remove('block')
                document.querySelector('.summaryinputtext').classList.remove('block')

                document.querySelector('.thread1').classList.add('none')
                document.querySelector('.threadtitle1').classList.add('none')
                document.querySelector('.threadtitletext1').classList.add('none')
                document.querySelector('.threadinput1').classList.add('none')
                document.querySelector('.threadinputtext1').classList.add('none')
                document.querySelector('.thread2').classList.add('none')
                document.querySelector('.threadtitle2').classList.add('none')
                document.querySelector('.threadtitletext2').classList.add('none')
                document.querySelector('.threadinput2').classList.add('none')
                document.querySelector('.threadinputtext2').classList.add('none')
                document.querySelector('.icon1').classList.add('none')
                document.querySelector('.icon2').classList.add('none')
                document.querySelector('.icon3').classList.add('none')
                document.querySelector('.icon4').classList.add('none')
                document.querySelector('.categories').classList.add('none')
                document.querySelector('.process').classList.add('none')
                document.querySelector('.threadsubmitbtn').classList.add('none')
                document.querySelector('.summarytitle').classList.add('none')
                document.querySelector('.summarytitletext').classList.add('none')
                document.querySelector('.summaryinput').classList.add('none')
                document.querySelector('.summaryinputtext').classList.add('none')
            }, 600);
            
        } else {

            e.target.style.transform = "rotate(0deg)"

            document.querySelector('.thread1').classList.remove('none')
            document.querySelector('.threadtitle1').classList.remove('none')
            document.querySelector('.threadtitletext1').classList.remove('none')
            document.querySelector('.threadinput1').classList.remove('none')
            document.querySelector('.threadinputtext1').classList.remove('none')
            document.querySelector('.thread2').classList.remove('none')
            document.querySelector('.threadtitle2').classList.remove('none')
            document.querySelector('.threadtitletext2').classList.remove('none')
            document.querySelector('.threadinput2').classList.remove('none')
            document.querySelector('.threadinputtext2').classList.remove('none')
            document.querySelector('.icon1').classList.remove('none')
            document.querySelector('.icon2').classList.remove('none')
            document.querySelector('.icon3').classList.remove('none')
            document.querySelector('.icon4').classList.remove('none')
            document.querySelector('.categories').classList.remove('none')
            document.querySelector('.process').classList.remove('none')
            document.querySelector('.threadsubmitbtn').classList.remove('none')
            document.querySelector('.summarytitle').classList.remove('none')
            document.querySelector('.summarytitletext').classList.remove('none')
            document.querySelector('.summaryinput').classList.remove('none')
            document.querySelector('.summaryinputtext').classList.remove('none')
            
            document.querySelector('.thread1').classList.add('block')
            document.querySelector('.threadtitle1').classList.add('block')
            document.querySelector('.threadtitletext1').classList.add('block')
            document.querySelector('.threadinput1').classList.add('block')
            document.querySelector('.threadinputtext1').classList.add('block')
            document.querySelector('.thread2').classList.add('block')
            document.querySelector('.threadtitle2').classList.add('block')
            document.querySelector('.threadtitletext2').classList.add('block')
            document.querySelector('.threadinput2').classList.add('block')
            document.querySelector('.threadinputtext2').classList.add('block')
            document.querySelector('.icon1').classList.add('block')
            document.querySelector('.icon2').classList.add('block')
            document.querySelector('.icon3').classList.add('block')
            document.querySelector('.icon4').classList.add('block')
            document.querySelector('.categories').classList.add('block')
            document.querySelector('.process').classList.add('block')
            document.querySelector('.threadsubmitbtn').classList.add('block')
            document.querySelector('.summarytitle').classList.add('block')
            document.querySelector('.summarytitletext').classList.add('block')
            document.querySelector('.summaryinput').classList.add('block')
            document.querySelector('.summaryinputtext').classList.add('block')


            setTimeout(() => {
                document.querySelector('.thread1').classList.add('collapse')
                document.querySelector('.threadtitle1').classList.add('collapse')
                document.querySelector('.threadtitletext1').classList.add('collapse')
                document.querySelector('.threadinput1').classList.add('collapse')
                document.querySelector('.threadinputtext1').classList.add('collapse')
                document.querySelector('.thread2').classList.add('collapse')
                document.querySelector('.threadtitle2').classList.add('collapse')
                document.querySelector('.threadtitletext2').classList.add('collapse')
                document.querySelector('.threadinput2').classList.add('collapse')
                document.querySelector('.threadinputtext2').classList.add('collapse')
                document.querySelector('.icon1').classList.add('collapse')
                document.querySelector('.icon2').classList.add('collapse')
                document.querySelector('.icon3').classList.add('collapse')
                document.querySelector('.icon4').classList.add('collapse')
                document.querySelector('.categories').classList.add('collapse')
                document.querySelector('.process').classList.add('collapse')
                document.querySelector('.threadsubmitbtn').classList.add('collapse')
                document.querySelector('.summarytitle').classList.add('collapse')
                document.querySelector('.summarytitletext').classList.add('collapse')
                document.querySelector('.summaryinput').classList.add('collapse')
                document.querySelector('.summaryinputtext').classList.add('collapse')

                document.querySelector('.thread1').classList.remove('expand')
                document.querySelector('.threadtitle1').classList.remove('expand')
                document.querySelector('.threadtitletext1').classList.remove('expand')
                document.querySelector('.threadinput1').classList.remove('expand')
                document.querySelector('.threadinputtext1').classList.remove('expand')
                document.querySelector('.thread2').classList.remove('expand')
                document.querySelector('.threadtitle2').classList.remove('expand')
                document.querySelector('.threadtitletext2').classList.remove('expand')
                document.querySelector('.threadinput2').classList.remove('expand')
                document.querySelector('.threadinputtext2').classList.remove('expand')
                document.querySelector('.icon1').classList.remove('expand')
                document.querySelector('.icon2').classList.remove('expand')
                document.querySelector('.icon3').classList.remove('expand')
                document.querySelector('.icon4').classList.remove('expand')
                document.querySelector('.categories').classList.remove('expand')
                document.querySelector('.process').classList.remove('expand')
                document.querySelector('.threadsubmitbtn').classList.remove('expand')
                document.querySelector('.summarytitle').classList.remove('expand')
                document.querySelector('.summarytitletext').classList.remove('expand')
                document.querySelector('.summaryinput').classList.remove('expand')
                document.querySelector('.summaryinputtext').classList.remove('expand')
            }, 0);
        }
    })

    const asset4introarrow = document.querySelector('.asset4contentintroarrow')
    asset4introarrow.addEventListener('click', (e) => {
        e.target.classList.toggle('introexpand')
        const introexpand = e.target.classList.contains('introexpand')


        if (introexpand) {
            e.target.style.transform = "rotate(180deg)"
            document.querySelector('.asset4contentintrodesc').classList.add('hide')
            document.querySelector('.asset4contentintrodesc').classList.remove('show')
            document.querySelector('.seemore').classList.add('hide')
            document.querySelector('.seemore').classList.remove('show')
            setTimeout(() => {
                document.querySelector('.asset4contentintrodesc').style.display = "none"
                document.querySelector('.seemore').style.display = "none"
            }, 600);
        }
        else {
            e.target.style.transform = "rotate(0deg)"
            document.querySelector('.asset4contentintrodesc').style.display = "block"
            document.querySelector('.seemore').style.display = "block"
            setTimeout(() => {
                document.querySelector('.asset4contentintrodesc').classList.remove('hide')
                document.querySelector('.asset4contentintrodesc').classList.add('show')
                document.querySelector('.seemore').classList.remove('hide')
                document.querySelector('.seemore').classList.add('show')
            }, 0);
        }
    })

    const asset4threadarrow = document.querySelector('.asset4contentthreadarrow')
    asset4threadarrow.addEventListener('click', (e) => {
        e.target.classList.toggle('threadexpand')
        const threadexpand = e.target.classList.contains('threadexpand')

        if (threadexpand) {
            e.target.style.transform = "rotate(180deg)"
            document.querySelector('.asset4contentthreaddesc').classList.add('hide')
            document.querySelector('.asset4contentthreadseemore').classList.add('hide')
            document.querySelector('.asset4contentexamplecont').classList.add('hide')
            document.querySelector('.asset4contentexampletext').classList.add('hide')
            document.querySelector('.asset4contentexamplecontent').classList.add('hide')

            document.querySelector('.asset4contentthreaddesc').classList.remove('show')
            document.querySelector('.asset4contentthreadseemore').classList.remove('show')
            document.querySelector('.asset4contentexamplecont').classList.remove('show')
            document.querySelector('.asset4contentexampletext').classList.remove('show')
            document.querySelector('.asset4contentexamplecontent').classList.remove('show')

            setTimeout(() => {
                document.querySelector('.asset4contentthreaddesc').style.display = "none"
                document.querySelector('.asset4contentthreadseemore').style.display = "none"
                document.querySelector('.asset4contentexamplecont').style.display = "none"
                document.querySelector('.asset4contentexampletext').style.display = "none"
                document.querySelector('.asset4contentexamplecontent').style.display = "none"
            }, 600);

        } else {
            e.target.style.transform = "rotate(0deg)"
            document.querySelector('.asset4contentthreaddesc').style.display = "block"
            document.querySelector('.asset4contentthreadseemore').style.display = "block"
            document.querySelector('.asset4contentexamplecont').style.display = "block"
            document.querySelector('.asset4contentexampletext').style.display = "block"
            document.querySelector('.asset4contentexamplecontent').style.display = "block"


            setTimeout(() => {
                document.querySelector('.asset4contentthreaddesc').classList.add('show')
                document.querySelector('.asset4contentthreadseemore').classList.add('show')
                document.querySelector('.asset4contentexamplecont').classList.add('show')
                document.querySelector('.asset4contentexampletext').classList.add('show')
                document.querySelector('.asset4contentexamplecontent').classList.add('show')

                document.querySelector('.asset4contentexamplecontent').classList.remove('hide')
                document.querySelector('.asset4contentthreaddesc').classList.remove('hide')
                document.querySelector('.asset4contentthreadseemore').classList.remove('hide')
                document.querySelector('.asset4contentexamplecont').classList.remove('hide')
                document.querySelector('.asset4contentexampletext').classList.remove('hide')
            }, 0);

        }
    })

    document.querySelector('.projecttitletext').innerHTML = `${response.title}`
    document.querySelector('.tasktitle').innerHTML = `${response.tasks[0].task_title}`
    document.querySelector('.assetcontent1').src = `${response.tasks[0].assets[0].asset_content}`

    document.querySelector('.taskdesc').innerHTML = `${response.tasks[0].task_description}`
    document.querySelector('.navtitle1').innerHTML = `${response.tasks[0].assets[0].asset_title}`
    document.querySelector('.navtitle2').innerHTML = `${response.tasks[0].assets[1].asset_title}`
    document.querySelector('.navtitle3').innerHTML = `${response.tasks[0].assets[2].asset_title}`
    document.querySelector('.navtitle4').innerHTML = `${response.tasks[0].assets[3].asset_title}`

    document.querySelector('.desctext1').innerHTML = `${response.tasks[0].assets[0].asset_description}`
    document.querySelector('.desctext2').innerHTML = `${response.tasks[0].assets[1].asset_description}`
    document.querySelector('.desctext3').innerHTML = `${response.tasks[0].assets[2].asset_description}`
    document.querySelector('.desctext4').innerHTML = `${response.tasks[0].assets[3].asset_description}`

    document.querySelector('.jbli1').innerHTML = `${response.tasks[0].assets[0].asset_title}`
    document.querySelector('.jbli2').innerHTML = `${response.tasks[0].assets[1].asset_title}`
    document.querySelector('.jbli3').innerHTML = `${response.tasks[0].assets[2].asset_title}`
    document.querySelector('.jbli4').innerHTML = `${response.tasks[0].assets[3].asset_title}`
    document.querySelector('.jblit').innerHTML = `${response.tasks[0].task_title}`


}
main();
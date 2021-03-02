let options = {
    series: [
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
        {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        },
    ],
    chart: {
        type: 'bar',
        height: 250,
        sparkline: {
            enabled: true,
        },
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
    },
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
    },
    yaxis: {
        title: {
            text: '$ (thousands)',
        },
    },
    fill: {
        opacity: 1,
    },
    tooltip: {
        y: {
            formatter: function(val){
                return "$ " + val + "thousands";
            },
        },
    },
};

let chart = new ApexCharts(document.querySelector('#apex1'), options);
chart.render();

let sideBarOpen = false;
let sidebar = document.querySelector('#sidebar');
let sidebarCloseIcon = document.getElementById('sidebarIcon');

function toggleSidebar(){
    if (!sideBarOpen){
        sidebar.classList.add('sidebar_responsive');
        sideBarOpen = true;
    }
}

function closeSidebar(){
    if (sideBarOpen){
        sidebar.classList.remove('sidebar_responsive');
        sideBarOpen = false;
    }
}

window.addEventListener("resize", function(){
    if (sidebar.classList.value === 'sidebar_responsive'){
        sidebar.classList.remove('sidebar_responsive');
        sideBarOpen = false;
        closeSidebar();
    }
})
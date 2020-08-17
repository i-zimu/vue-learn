<template>
    <div class="select-nav">
      <!-- 按钮 -->
        <Button type="primary">Primary</Button>
        <br><br>
        <Button type="primary" shape="circle" icon="ios-search"></Button>
        <br><br>
        <Button type="primary" icon="ios-search">Search</Button>
        <br>
        <br>
        <!-- 三级联动 -->
         <Cascader :data="data" size="large"></Cascader>
        <br>
        <br>
        <!-- 下拉选择框 -->
         <Select v-model="model8" clearable style="width:200px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <br>
        <br>
      <Breadcrumb>
        <BreadcrumbItem to="/">Home</BreadcrumbItem>
        <BreadcrumbItem to="/view">View</BreadcrumbItem>
        <!-- <BreadcrumbItem to="/larScreen/index">大屏展示页面1</BreadcrumbItem> -->
    </Breadcrumb>
        </div>
</template>
<script>
import '../common/commonCss.less'
export default {
    data(){
     return {
                data: [{
                    value: 'beijing',
                    label: '北京',
                    children: [
                        {
                            value: 'gugong',
                            label: '故宫'
                        },
                        {
                            value: 'tiantan',
                            label: '天坛'
                        },
                        {
                            value: 'wangfujing',
                            label: '王府井'
                        }
                    ]
                }, {
                    value: 'jiangsu',
                    label: '江苏',
                    children: [
                        {
                            value: 'nanjing',
                            label: '南京',
                            children: [
                                {
                                    value: 'fuzimiao',
                                    label: '夫子庙',
                                }
                            ]
                        },
                        {
                            value: 'suzhou',
                            label: '苏州',
                            children: [
                                {
                                    value: 'zhuozhengyuan',
                                    label: '拙政园',
                                },
                                {
                                    value: 'shizilin',
                                    label: '狮子林',
                                }
                            ]
                        }
                    ],
                }],
                 cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                   model8: ''
            }
        },
    // methods(){}
}
</script>
<style lang="less" scoped>
    .select-nav{
        width: 100%;
        margin-top: 20px;
    }
    

</style>
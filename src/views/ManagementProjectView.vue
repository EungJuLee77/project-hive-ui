<script>
import axios from 'axios'

export default {
  data() {
    return {
      items : [
        {
          project : "1",
          pm : "na",
          startDate : "2022.06.01",
          endDate : "2022.12.01",
          status : "start",
          mm : "10",
          totalMm : "20"
        }, 
        {
          project : "2",
          pm : "na2",
          startDate : "2022.06.01",
          endDate : "2022.12.01",
          status : "start",
          mm : "10",
          totalMm : "20"
        }, 
        {
          project : "3",
          pm : "na3",
          startDate : "2022.06.01",
          endDate : "2022.12.01",
          status : "start",
          mm : "10",
          totalMm : "20"
        }, 
      ],
      columns : [
        {
          alias : "project",
          name : "이름"
        },
        {
          alias : "pm",
          name : "PM"
        },          {
          alias : "startDate",
          name : "시작"
        },          {
          alias : "endDate",
          name : "종료"
        },          
        {
          alias : "status",
          name : "상태"
        },          {
          alias : "mm",
          name : "투입 MM"
        },
        {
          alias : "totalMm",
          name : "총 MM"
        },
      ]
    }
  }
}
</script>

<template>
  <div class="container">
    <h3>관리-프로젝트</h3>
    <div class="row">
      <div class="col-4">기간</div>
      <div class="col-2">상태</div>
      <div class="col-3"></div>
      <div class="col-3">버튼 영역</div>
    </div>
    <table class="table mt-4">
      <thead class="thead-primary">
        <tr>
          <th class="text-center" v-for="(column, index) in columns" :key="index"> {{column.name}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in items" :key="index">
          <td class="text-center"  v-for="(column, indexColumn) in columns" :key="indexColumn">{{item[column.alias]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style>
  .table {
    min-width: 1000px !important;
    width: 100%;
    background: #fff; 
  }
  
  .table thead.thead-primary {
    background: #1089ff; 
  }

  .table thead th {
    border: none;
    padding: 20px 30px;
    /* font-size: 14px; */
    color: #fff; 
  }
  .table tbody tr {
    margin-bottom: 10px; 
  }

  .table tbody th, .table tbody td {
    border: none;
    padding: 20px 30px;
    border-bottom: 3px solid #f8f9fd;
    /* font-size: 14px;  */
  }
</style>
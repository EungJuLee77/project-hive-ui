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
        {
          alias : "delete",
          name : ""
        },
      ]
    }
  },
  methods: {
    handleDelete(index) {
      console.log("handleDelete index : " + index)

      // TODO: delete 처리 필요
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
          <td class="text-center " v-for="(column, indexColumn) in columns" :key="indexColumn" >           
              {{ item[column.alias] }}
              <span v-if="indexColumn === columns.length - 1" class="x-button-td" @click="handleDelete(index)">&times;</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<style>
  .table {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
  }

  .table thead th {
    background-color: #0d6efd;
    color: #fff;
    font-weight: bold;
    padding: 12px;
    text-align: left;
    border-bottom: 2px solid #ccc;
  }

  .table tbody td {
    padding: 12px;
    border-bottom: 1px solid #ddd;
    vertical-align : middle;
  }

  .table tbody tr:nth-child(even) {
    background-color: #f8f9fa;
  }

  .table tbody tr:hover {
    background-color: #e9ecef;
  }

  .x-button-td {
    cursor: pointer;
    color: black;
    font-weight: bold;
    font-size:x-large
  }

</style>
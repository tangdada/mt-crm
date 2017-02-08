<template>
<div>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="名称" width="180"></el-table-column>
    <el-table-column prop="phone" label="电话" width="180"></el-table-column>
    <el-table-column label="地址" inline-template><span>{{row.address.address | empty}}</span></el-table-column>
    <el-table-column label="操作" inline-template><span><el-button type="info" size="small" @click="showDialog">动我试试</el-button></span></el-table-column>
  </el-table>

  <!-- dialog start -->
  <el-dialog title="收货地址" v-model="dialogFormVisible" size="tiny" :show-close=false>
    <el-form :model="form">
      <el-form-item label="活动名称" :label-width="formLabelWidth">
        <el-input v-model="form.name" auto-complete="off"></el-input>
      </el-form-item>
      <el-form-item label="活动区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="dialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
    </div>
  </el-dialog>
  <!-- dialog end -->

</div>
</template>

<script type="text/ecmascript-6">
import {
  Table,
  TableColumn,
  Button,
  Dialog,
  Form,
  FormItem,
  Select,
  Input,
  Option
} from 'element-ui'

export default {
  components: {
    'el-table': Table,
    'el-table-column': TableColumn,
    'el-button': Button,
    'el-dialog': Dialog,
    'el-form': Form,
    'el-form-item': FormItem,
    'el-select': Select,
    'el-input': Input,
    'el-option': Option
  },

  data() {
    return {
      tableData: [],

      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    };
  },

  beforeMount() {
    this.$http.get('/hospital').then((response) => {
      this.tableData = response.body;
    }, (res) => {
      this.errorMsg = res.text;
    });
  },

  methods: {
    showDialog() {
      this.dialogFormVisible = true;
    }
  },

  computed: {
  }
};
</script>

<style scoped lang="less"></style>

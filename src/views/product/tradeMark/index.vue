<template>
  <div>
    <!-- 按钮  -->
    <el-button type="primary" icon="el-icon-plus" style="margin: 10px 0px">添加</el-button>
    <!--
         表格组件
         data:表格组件将来需要展示的数据------数组类型
         border：是给表格添加边框
         column属性
         label：显示标题
         width：对应列的宽度
         align：标题的对齐方式
         prop:对应列内容的字段名
         注意1：elmentUI当中的table组件，展示的数据是以一列一列进行展示数据
       -->
    <el-table style="width: 100%" border>
      <el-table-column prop="prop" label="序号" width="80px" align="center" />
      <el-table-column prop="prop" label="品牌名称" width="width" />
      <el-table-column prop="prop" label="品牌LOGO" width="width" />
      <el-table-column prop="prop" label="操作" width="width" />
    </el-table>
    <!-- 分页器 -->
    <el-pagination
      :current-page="6"
      :page-size="3"
      :total="99"
      :pager-count="9"
      layout="prev, pager, next, jumper,->,sizes,total"
      :page-sizes="[3, 5, 10]"
      style="margin-top: 20px; text-align: center"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script>
export default {
  name: 'TradeMark',
  data() {
    return {
      // 当前页码
      page: 1,
      // 当前展示条数
      limit: 3
    }
  },
  mounted() {
    this.getPageList()
  },
  methods: {
    // 获取品牌列表的数据
    async getPageList() {
      // 解构出参数
      const { page, limit } = this
      const result = await this.$API.trademark.reqTradeMarkList(page, limit)
      if (result.code == 200) {
        // 分别是展示数据总条数与列表展示的数据
      }
    }
  }
}
</script>

<style>
</style>
